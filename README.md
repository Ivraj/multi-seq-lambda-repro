# multi-seq-lambda-repro

This repo describes and helps replicate an issue with video generation on Remotion Lambda. 

## Issue Description

Our team noticed that if you use a `<Video >` component in multiple
`<Series.Sequence>` components, the generated video flickers either the first
frame of the video or a black screen at various points throughout. 

Upon further investigation, we observed that...
1. this flickering does NOT occur when the video is generated locally, and
2. the flickers occur at points that line up with how the video is chunked for
   rendering.

... which led us to believe that the issue is specific to the use of `<Video>`
components with multiple `<Series.Sequence>` components in Remotion Lambda.

## Replication

### Setup

Clone this repo with...

`git clone https://github.com/Ivraj/multi-seq-lambda-repro.git`

and `cd` into the dir. Install deps with `yarn` or `npm i`.

The rest of the reproduction steps assumes that you have...
   1. set up Remotion Lambda in AWS with at least one function, and
   2. locally set the
     `REMOTION_AWS_ACCESS_KEY_ID`/`REMOTION_AWS_SECRET_ACCESS_KEY` env vars,
   
You can verify your env vars by running `npx remotion lambda policies validate`.
   
For reference, check out the [Remotion Lambda setup docs](https://www.remotion.dev/docs/lambda/setup).

### Replication Steps

First we'll generate the test videos. Then we'll compare them. 

#### Generate Test Videos

To generate the test videos, run `yarn repro`. If you run into any issues (e.g.
a Puppeteer timeout) or would simply prefer to run the commands step by step,
you can run the individual steps below.

1. **Deploy test site**

   Run `yarn repro:setup`. This deploys the `SingleSequence` and `MultiSequence`
   compositions to a site called `multi-seq-lambda-repro-site`. This site will
   be used to generate our test videos in Lambda.

3. **Generate the test videos locally**
   
   Run `yarn repro:local`. This will generate the test videos locally using the
   `remotion render` CLI cmd. 
   
   The videos should be generated at `out/single-sequence-local.mp4` and
   `out/multi-sequence-local.mp4`.

   Note that depending on your local setup, you may run into timeout issues with
   Puppeteer. If this is the case, I recommend generating each video
   individually using the `yarn build:single-seq` and `yarn build:multi-seq`
   cmds. Running these individually was more reliable for me. 

4. **Generate the test videos in Lambda**

   Run `yarn repro:lambda`. This will generate the test videos using Lambda. 
   
   The videos should be downloaded at `out/single-sequence-lambda.mp4` and
   `out/multi-sequence-lambda.mp4`
  
   Note that there will be some trivial cost (~a couple of cents) to generating
   these videos.

5. **Optional: Cleanup the repro site**

   Run `yarn repro:clean` to delete the repro site from your S3 bucket.

#### Compare the outputs

You should now have 4 videos in `out/`

- `out/multi-sequence-lamda.mp4`: A Lambda generated video that uses a `<Video>` with multiple `<Series.Sequence>`s
- `out/multi-sequence-local.mp4`: A locally generated video that uses a `<Video>` with multiple `<Series.Sequence>`s
- `out/single-sequence-lamda.mp4`: A Lambda generated video that uses a `<Video>` with a single `<Series.Sequence>`
- `out/single-sequence-local.mp4`: A locally generated video that uses a `<Video>` with a single `<Series.Sequence>`

Notice how `out/single-sequence-lambda.mp4`, `out/single-sequence-local.mp4`,
and `out/multi-sequence-local.mp4` have no noticable differences. 
   
However, observe how `out/multi-sequence-lambda.mp4` has flickering where the
screen either displays the first frame of the video or displays a black screen.

   