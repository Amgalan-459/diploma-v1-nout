export interface Knowladgebase {
    id: number;
    title: string;
    author: string;
    topic: string;
    type: 'text' | 'image' | 'video';
    description: string;
    textRaw: string;
}
