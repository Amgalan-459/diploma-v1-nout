export interface Lesson {
    id: number,
    title: string,
    completed: boolean,
    videoUrl: string | null,
    content: string,
    isAvailable: boolean,
    moduleId: number
}
