# multi-seq-lambda-repro

This repo describes and helps replicate an issue with video generation on Remotion Lambda. 

## Issue Description

Our team noticed that if you use a `<Video >` component in multiple
`<Series.Sequence>` components, the generated video flickers a black screen at
various points throughout the video. 

Upon further investigation, we observed that...
1. this flickering does NOT occur when the video is generated locally, and
2. the flickers of black screen occur at points that line up with how the video
   is chunked for rendering.

... which led us to believe that the issue is specific to Remotion Lambda.

## Reproduction Instructions

Below are steps on how to generate videos that demonstrate the described issue. 

1. **Clone this repo and install deps**

   Clone this repo with `git clone https://github.com/Ivraj/multi-seq-lambda-repro.git`.
   Then install deps with `yarn` or `npm i`.

2. **Ensure your AWS account is setup**

   This repro assumes that you have...
   - set up Remotion Lambda in AWS with at least one function, 
   - locally set the
     `REMOTION_AWS_ACCESS_KEY_ID`/`REMOTION_AWS_SECRET_ACCESS_KEY` env vars,
   
   You can verify your env vars by running 
   `npx remotion lambda policies validate`
   
   [Remotion Lambda setup docs](https://www.remotion.dev/docs/lambda/setup).

3. **Deploy test site**

   Run `yarn repro:setup`. This deploys the `SingleSequence` and `MultiSequence`
   compositions to a site called `multi-seq-lambda-repro-site`. These will be
   used to generate our test videos in Lambda.

4. **Generate the test videos locally**
   
   Run `yarn repro:local`. This will generate the test videos locally using the
   `remotion render` CLI cmd. The videos should generated at
   `out/single-sequence-local.mp4` and `out/multi-sequence-local.mp4`.

5. **Generate the test videos in Lambda**

   Run `yarn repro:lambda`. This will generate the test videos using Lambda. The
   videos should be downloaded at `out/single-sequence-lambda.mp4` and
   `out/multi-sequence-local.mp4`
  
   Note that there will be some trivial cost (~a couple of cents) to generate
   these videos.

6. **Compare the outputs**

   Notice how `out/single-sequence-lambda.mp4` and
   `out/single-sequence-local.mp4` have no noticable differences. 
   
   However, observe how `out/multi-sequence-lambda.mp4` has flickering where the
   screen turns black, which is not present in `out/multi-sequence-local.mp4`. 
