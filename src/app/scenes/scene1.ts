import { SceneModel } from "./scenes-model";

export const scene1: SceneModel = {
  responses: [
    {
      response:
        "When was your last period?",
      codeMessage: "Although the question is important, the manner in which the question is asked doesn’t allow the patient to understand why the question is being asked.",
      correct: false,
      src: "scene1/r1.m4v",
    },
    {
      response:
        "You probably don’t know this question, but when was your last period?",
      codeMessage:
        "This is a non-therapeutic response. This question is judgmental and impacts the nurse’s ability to engage in an honest discussion with the client.",
      correct: false,
      src: "scene1/r2.m4v",
    },
    {
      response:
        "For this next set of questions, is it okay if I ask you about your menstrual cycle, and other questions related to sexual health? We ask all patients these questions as part of our admission assessment. Knowing this information allows us to care for you the best way we can.",
      codeMessage:
        "By asking permission to ask sensitive questions, the nurse is developing a rapport and allows the client to make decisions regarding the assessment.",
      correct: true,
      src: "scene1/r3.m4v",
    },
  ],
  situation:
    "You are caring for a 22 year old female patient admitted for an abscess on their forearm. The patient has been injecting drugs for the past 2 years and admits to using marijuana and heroin, and occasionally cocaine and alcohol. They have been admitted to the hospital for antibiotic treatment and you are getting ready to complete the admission assessment. You have reached the part of the assessment where you are asking about the last menstrual period and if the patient is pregnant.",
  sceneId: 0
};
