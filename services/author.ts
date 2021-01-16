export interface Author {
    id: number;
    name: string;
    created: Date;
}

export const getAuthors = async (): Promise<Author[]> => {
    const luke: Author = {
        id: 1,
        name: 'Luke',
        created: new Date()
    }

    const darth: Author = {
        id: 2,
        name: 'Darth',
        created: new Date()
    }

    return [luke, darth];
}
