import { WorkoutData } from "./workout-data";

export interface ExerciseData {
    id: number,
    name: string,
    weightPlan: number[],
    repPlan: number[],
    weightFact: number[],
    repFact: number[],
    videoUrl: string,
    description: string,
    workoutId: number,
    workout: WorkoutData | null
}
