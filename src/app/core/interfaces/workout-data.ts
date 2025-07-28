import { ExerciseData } from "./exercise-data";
import { TraineeData } from "./trainee-data";

export interface WorkoutData {
    id: number,
    date: string,
    traineeId: number,
    trainee: TraineeData | null,
    exercises: ExerciseData[]
}
