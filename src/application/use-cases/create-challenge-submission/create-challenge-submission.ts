import { Submission } from "../../../domain/entities/submission/submission";
import { CreateChallengeSubmissionRequest } from "./types";

export class CreateChallengeSubmission {
  execute({ studentId, challengeId }: CreateChallengeSubmissionRequest) {
    const submission = Submission.create({
      studentId,
      challengeId,
    });

    return submission;
  }
}
