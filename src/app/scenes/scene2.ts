import { SceneModel } from "./scenes-model";

export const scene2: SceneModel = {
  responses: [
    {
      response:
        "You look concerned. Are you worried about anything related to your period?",
      codeMessage:
        "This approach allows the patient to decide if they want to talk about their reproductive health and puts the patient as the person in the position of power. This approach allows the patient to see that the nurse is interested in learning and hearing from the patient.",
      correct: true,
      src: "scene2/r1.m4v",
    },
    {
      response:
        "If you don’t remember the date, I can just put anything down.",
      codeMessage:
        "This is not a therapeutic response and is false documentation. By not acknowledging the patient’s uneasiness with the question and probing further, the health of the patient may be compromised.",
      correct: false,
      src: "scene2/r2.m4v",
    },
    {
      response:
        "It’s not a really big deal to answer a question about when your last period was-just tell me!",
      codeMessage:
        "This is not a therapeutic response. This response is presumptive and judgmental and does not demonstrate an understanding of the patient’s uneasiness regarding the question. The patient will be less likely to be honest and open with the nurse.",
      correct: false,
      src: "scene2/r3.m4v",
    },
  ],
  situation:
    "You begin to ask questions around reproductive and sexual health. When you ask when the patient’s last menstrual period was, the client becomes visibly unsettled.",
  sceneId: 1,
};
