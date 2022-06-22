import { InMemoryChallengesRepository } from "../../../../tests/repositories/in-memory-challenges-repository";
import { InMemoryStudentsRepository } from "../../../../tests/repositories/in-memory-students-repository";
import { Challenge } from "../../../domain/entities/challenge/challenge";
import { Student } from "../../../domain/entities/student/student";
import { CreateChallengeSubmission } from "./create-challenge-submission";

describe("", () => {
  it("", () => {
    const studentsRepository = new InMemoryStudentsRepository();
    const challengesRepository = new InMemoryChallengesRepository();
    const ccb = new CreateChallengeSubmission(
      studentsRepository,
      challengesRepository
    );

    const student = Student.create({
      firstName: "Paulo",
      lastName: "Silva",
      email: "paulo@test.com",
    });

    const challenge = Challenge.create({
      title: "Test Challenge",
      instructionsURL: "https://test.com",
    });

    studentsRepository.items.push(student);
    challengesRepository.items.push(challenge);

    const result = ccb.execute({
      studentId: student.id,
      challengeId: challenge.id,
    });

    expect(result).toBeTruthy();
  });
});
