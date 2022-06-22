import { CreateChallengeSubmission } from "./create-challenge-submission";

describe("", () => {
  it("", () => {
    const ccb = new CreateChallengeSubmission();

    const result = ccb.execute({
      studentId: "fake-studentId",
      challengeId: "fake-challengeId",
    });

    expect(result).toBeTruthy();
  });
});
