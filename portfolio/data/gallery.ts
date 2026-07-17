export type GalleryImage = {
  id: number;
  title: string;
  category: string;
  image: string;
};

export const gallery: GalleryImage[] = [
  {
    id: 1,
    title: "Coding Setup",
    category: "Workspace",
    image: "/gallery/1.jpg",
  },
  {
    id: 2,
    title: "My Workspace",
    category: "Workspace",
    image: "/gallery/2.jpg",
  },
];