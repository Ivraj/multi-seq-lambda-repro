# multi-seq-lambda-repro

## Reproduction Instructions



1. **Clone this repo**

  Clone this repo with `git clone TODO`. Then install deps with `yarn` or 
  `npm i`.

2. **Ensure your AWS account is setup**

   This repro assumes that you've set up Remotion Lambda, have set the
   `REMOTION_AWS_ACCESS_KEY_ID`/`REMOTION_AWS_SECRET_ACCESS_KEY` env vars, and
   have at least one function deployed. 
   
   You can verify your env vars by running 
   `npx remotion lambda policies validate`
   
   [Docs for setup instructions](https://www.remotion.dev/docs/lambda/setup).

3. **Deploy test site**

  Run `yarn repro:setup`. This deploys the `Repro` composition to a site called
  `multi-seq-lambda-repro-site`.

3. **Generate the test video locally**

  Run `yarn repro:local`. This will generate the video locally using the
  default `yarn build` cmd, creating a video at `out/video.mp4`.

4. **Generate the test video in Lambda**

  Run `yarn repro:lambda`. This will generate a video in Lambda. Note that you 

5. **Compare the outputs**




### 3. Generate video 



### 4. Compare outputs