module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Simplefolio`,
        short_name: `Simplefolio`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#02aab0`,
        display: `standalone`,
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: `gatsby-source-firestore`,
      options: {
        credential: require('./firebase.json'),
        types: [
          {
            type: 'Writing',
            collection: 'writing',
            map: item => ({
              date: item.date,
              description: item.description,
              image: item.image,
              link: item.link,
              title: item.title, 
            })
          },
          {
            type: 'Photos', 
            collection: 'photos',
            map: item => ({
              first: item.first,
              second: item.second, 
            })
          },
        ]
      }
    },
  ],
};
