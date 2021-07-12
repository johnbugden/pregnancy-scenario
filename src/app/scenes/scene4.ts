import { SceneModel } from "./scenes-model";

export const scene4: SceneModel = {
  responses: [
    {
      response:
        "Well of course your baby is going to go through horrible withdrawals. They will be crying, shaking, and just plain miserable because of what you did.",
      codeMessage:
        "This is blaming and shaming and not part of a therapeutic response.",
      correct: false,
      src: "scene4/r1.mp4",
    },
    {
      response:
        "If you are on medication assisted treatment, your baby may experience withdrawal symptoms from the medication but the baby will receive treatment to make them comfortable. Your love and cuddling have been shown to be some of the best ways to help with the newborn’s withdrawal.",
      codeMessage:
        "By being open and honest with the patient, the development of rapport can occur. The nurse is engaging in trauma informed care by supporting the patient in their decision making. The nurse acknowledges and responds honestly to the patient’s question but doesn’t shame or blame them. The patient is making statements that move them toward the next step in recovery.",
      correct: true,
      src: "scene4/r2.mp4",
    },
    {
      response:
        "There are a lot of people that can’t have a baby and if you love your baby, you will want to consider adoption or foster care until you get your life together.",
      codeMessage:
        "This is not a therapeutic response and does not meet the patient where they are at in their life. This response does not build rapport with the patient or recognize their level of motivation to change behaviors.",
      correct: false,
      src: "scene4/r3.mp4",
    },
  ],
  situation:
    "You have provided education to the patient about medications used during pregnancy for opioid dependence and the effects of marijuana, alcohol, and cocaine on the fetus. The patient asks about what happens to the newborn after delivery and if the “heroin withdrawals” will be as bad as when they quit “cold turkey”.",
  sceneId: 3,
};
