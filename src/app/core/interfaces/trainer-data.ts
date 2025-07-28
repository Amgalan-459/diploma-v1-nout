import { TraineeData } from "./trainee-data";

export interface TrainerData {
    id: number,
    name: string,
    surname: string,
    email: string,
    password: string,
    phoneNumber: string | null,
    sex: number,
    isActive: boolean,
    trainees: TraineeData[]
}
