export interface Knowladgebase {
    id: number;
    title: string;
    author: string;
    topic: string;
    trainerId: number;
    type: 'text' | 'image' | 'video';
    description: string;
    textRaw: string;
    videoUrl: string | null
}
