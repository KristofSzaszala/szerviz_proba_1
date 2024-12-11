const images = [
    'pics/bg1.jpg',
    'pics/bg2.jpg',
    'pics/bg3.jpg',
    'pics/bg4.jpg',
    'pics/bg5.jpg'
];

images.forEach((image) => {
    const img = new Image();
    img.src = image;
});
