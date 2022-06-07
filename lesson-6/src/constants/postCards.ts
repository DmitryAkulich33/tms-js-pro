export interface IPostCard {
    id: number;
    image?: string;
    text: string;
    date: string;
    title: string;
}

const postCards: Array<IPostCard> = [
    {
        id: 1,
        image: "https://i.pinimg.com/originals/c0/e2/e2/c0e2e224c6c7df873ad61ff5e011f88f.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis velit sit optio ducimus! Enim nemo quas nobis dolor illum laborum dicta obcaecati asperiores esse impedit, adipisci voluptas est in debitis!",
        date: "2021-11-12",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
    },
    {
        id: 2,
        image: "https://kuda-spb.ru/uploads/709a0fccc31451491044e31bf0973090.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis velit sit optio ducimus! Enim nemo quas nobis dolor illum laborum dicta obcaecati asperiores esse impedit, adipisci voluptas est in debitis!",
        date: "2021-11-13",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
    },
    {
        id: 3,
        image: "https://catherineasquithgallery.com/uploads/posts/2021-02/1613704903_35-p-kosmicheskii-fon-dlya-prezentatsii-43.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis velit sit optio ducimus! Enim nemo quas nobis dolor illum laborum dicta obcaecati asperiores esse impedit, adipisci voluptas est in debitis!",
        date: "2021-11-14",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
    },
    {
        id: 4,
        image: "https://www.sunhome.ru/i/wallpapers/60/vsemirnii-den-kosmonavtiki-foto.xxl.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis velit sit optio ducimus! Enim nemo quas nobis dolor illum laborum dicta obcaecati asperiores esse impedit, adipisci voluptas est in debitis!",
        date: "2021-11-14",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
    },
    {
        id: 5,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis velit sit optio ducimus! Enim nemo quas nobis dolor illum laborum dicta obcaecati asperiores esse impedit, adipisci voluptas est in debitis!",
        date: "2021-11-14",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
    },
    {
        id: 6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis velit sit optio ducimus! Enim nemo quas nobis dolor illum laborum dicta obcaecati asperiores esse impedit, adipisci voluptas est in debitis!",
        date: "2021-11-14",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
    }
]

export default postCards;