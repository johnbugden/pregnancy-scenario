import { SceneModel } from "./scenes-model";

export const scene5: SceneModel = {
  responses: [
    {
      response:
        "I can see that you really want to make changes in your life. Understanding what will happen is an important part of a healthy pregnancy. As you advance through your pregnancy on medication assisted treatment, it is common to need an adjustment with the medication. It is important to contact your provider to let them know if you begin to experience cravings or withdrawal symptoms.",
      codeMessage:
        "The nurse is maintaining an open and honest relationship with the patient by preparing them for the changes that commonly occur during pregnancy while on medication assisted treatment.",
      correct: true,
      src: "scene5/r1.m4v",
    },
    {
      response:
        "Well, I hope you don’t relapse and do all of this for nothing. A lot of people relapse when pregnant.",
      codeMessage:
        "The nurse’s statement doesn’t promote discussion about the patient’s way of keeping safe if they experience cravings or do relapse. This is a missed opportunity to assess the patient’s risk factors and to provide harm reduction education.",
      correct: false,
      src: "scene5/r2.m4v",
    },
    {
      response:
        "You know that going on medication assisted treatment is just trading one drug for another.  As soon as the baby is born, you really should get off it.",
      codeMessage:
        "This is not a therapeutic message. The nurse is inaccurate in their statement about replacing one drug for another. This statement does nothing to build rapport and instead damages the relationship between the patient and health care providers.",
      correct: false,
      src: "scene5/r3.m4v",
    },
  ],
  situation:
    "You have been asking questions about the patient to get to know them better as a person, and their goals of their pregnancy and delivery.  You also provided resources for peer support from persons with a lived experience. You also know that there is a risk of relapse during the pregnancy.",
  sceneId: 4
};
