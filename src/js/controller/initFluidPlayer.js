const initFluidPlayer = () => {
  fluidPlayer(
    'my-video',
    {
      layoutControls: {
        primaryColor: '#0199e6',
        posterImage: 'images/placeholderVideo.png',
      },
    }
  );
};

export default initFluidPlayer;