export interface Module {
    id: number,
    title: string,
    expanded: boolean,
    lessonIds: number[],
    testIds: number[]
}
