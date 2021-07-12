import { SceneModel } from "./scenes-model";

export const scene3: SceneModel = {
  responses: [
    {
      response:
        "You should have done this when you first suspected you were pregnant, but you absolutely need to stop using drugs now before you hurt your baby any more than you already have!",
      codeMessage:
        "This is not a therapeutic response. Shaming the patient is not helpful and causes damage to the relationship.  Pregnant individuals who are dependent on drugs should not stop using abruptly as this may cause seizures to the fetus, a miscarriage, premature birth, or death of the fetus. Abrupt cessation of drug use is dangerous and contraindicated.",
      correct: false,
      src: "scene3/r1.m4v",
    },
    {
      response:
        "You can’t raise a baby while using drugs. You know that after you give birth, they are going to take your baby away from you.",
      codeMessage:
        "This is not a therapeutic response and is assumptive on the nurse’s part. Removal of the newborn from parental care is based on a number of factors.",
      correct: false,
      src: "scene3/r2.m4v",
    },
    {
      response:
        "Thank you for sharing that you are pregnant. I would like permission to share this information with your health care team so that we are making sure that your antibiotic is safe to use during pregnancy. It is important that you don’t abruptly stop using drugs because it can be harmful to the baby. There are medications that you can get started on that are safe for you and the baby so that you don’t go through withdrawal. If you are okay with it, I’d like to get someone to help you with this.",
      codeMessage:
        "This response opens the door to communication and education that is nonjudgmental and safer for the patient and fetus. The nurse recognizes that pregnancy is a pivotal event that has been shown to move the parent toward treatment and recovery.",
      correct: true,
      src: "scene3/r3.m4v",
    },
  ],
  situation:
    'The patient admits that she is pregnant and had been isolating herself to avoid anyone asking questions. She states that she “wants to stop using drugs all together” and has tried “quitting cold turkey” a few times since she found out she was pregnant.',
  sceneId: 2,
};
