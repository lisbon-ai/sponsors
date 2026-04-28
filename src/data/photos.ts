export type PhotoOrientation = "horizontal" | "vertical";

export type Photo = {
    src: string;
    orientation: PhotoOrientation;
    alt: string;
    position: string;
};

const make = (file: string, orientation: PhotoOrientation): Photo => ({
    src: `photos/${file}`,
    orientation,
    alt: "Lisbon AI 2025",
    position: orientation === "vertical" ? "50% 40%" : "50% 50%",
});

export const photos: Photo[] = [
    make("lisbon-ai-2025-01.jpg", "horizontal"),
    make("lisbon-ai-2025-02.jpg", "horizontal"),
    make("lisbon-ai-2025-03.jpg", "horizontal"),
    make("lisbon-ai-2025-04.jpg", "horizontal"),
    make("lisbon-ai-2025-05.jpg", "horizontal"),
    make("lisbon-ai-2025-06.jpg", "horizontal"),
    make("lisbon-ai-2025-07.jpg", "vertical"),
    make("lisbon-ai-2025-08.jpg", "horizontal"),
    make("lisbon-ai-2025-09.jpg", "horizontal"),
    make("lisbon-ai-2025-10.jpg", "horizontal"),
    make("lisbon-ai-2025-11.jpg", "vertical"),
    make("lisbon-ai-2025-12.jpg", "horizontal"),
    make("lisbon-ai-2025-13.jpg", "horizontal"),
    make("lisbon-ai-2025-14.jpg", "horizontal"),
    make("lisbon-ai-2025-15.jpg", "horizontal"),
    make("lisbon-ai-2025-16.jpg", "vertical"),
    make("lisbon-ai-2025-17.jpg", "vertical"),
    make("lisbon-ai-2025-18.jpg", "vertical"),
    make("lisbon-ai-2025-19.jpg", "horizontal"),
    make("lisbon-ai-2025-20.jpg", "horizontal"),
    make("lisbon-ai-2025-21.jpg", "horizontal"),
];
