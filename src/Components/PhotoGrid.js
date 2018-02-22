import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

// Import all images 
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
  
const images = importAll(require.context('../Images', false, /\.(png|jpe?g|svg)$/));

console.log(images);

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '20px',
  },
  gridList: {
    width: 2000,
    height: 1000,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: images['the-606-2.jpg'],
    title: 'The 606',
    featured: true,
  },
  {
    img: images['ackerman.jpg'],
    title: 'Ackerman Sports Complex',
    featured:true
  },
  {
    img: images['the-606-1.png'],
    title: 'The 606',
  },
  {
    img: images['the-606-3.jpg'],
    title: 'The 606',
  },
  {
    img: images['the-606-4.jpg'],
    title: 'The 606',
  },
  {
    img: images['the-606-5.jpg'],
    title: 'The 606',
  },
  {
    img: images['ll-bean-1.jpg'],
    title: 'LL Bean',
    featured: true,
  },
  {
    img: images['metra-mayfair-1.jpg'],
    title: 'Metra Mayfair',
    featured: true,
  },
  {
    img: images['ll-bean-2.jpg'],
    title: 'LL Bean',
  },
  {
    img: images['metra-mayfair-2.jpg'],
    title: 'Metra Mayfair',
  },
  {
    img: images['metra-mayfair-3.jpg'],
    title: 'Metra Mayfair',
  },
  {
    img: images['metra-mayfair-4.jpg'],
    title: 'Metra Mayfair',
  },
  {
    img: images['misc-4.jpg'],
    title: 'Custom Awning',
    featured: true,
  },
  {
    img: images['ornamental-steps.jpg'],
    title: 'Ornamental Steps',
    featured: true,
  },
  {
    img: images['walnut-table.jpg'],
    title: 'Custom table',
  },
  {
    img: images['firepit.jpg'],
    title: 'Custom firepit',
  },
  {
    img: images['cdb-entrance.jpg'],
    title: 'Casa Dei Bambini Montesorri',
  },
  {
    img: images['cdb-playground.jpg'],
    title: 'Casa Dei Bambini Montesorri',
  },
  {
    img: images['cdb-canopy.jpg'],
    title: 'Casa Dei Bambini Montesorri',
    featured: true,
  },
  {
    img: images['cdb-mezzanine.jpg'],
    title: 'Casa Dei Bambini Montesorri',
    featured: true,
  },
  {
    img: images['chicago-fence-1.jpg'],
    title: 'Custom fence',
  },
  {
    img: images['chicago-fence-2.jpg'],
    title: 'Custom fence',
  },
  {
    img: images['lp-1.jpg'],
    title: 'Custom balcony',
  },
  {
    img: images['stairs-4.jpg'],
    title: 'Custom stairs',
  },
];

/**
 * This example demonstrates "featured" tiles, using the `rows` and `cols` props to adjust the size of the tile.
 * The tiles have a customised title, positioned at the top and with a custom gradient `titleBackground`.
 */
const PhotoGrid = () => (
  <div style={styles.root}>
    <GridList
      cols={4}
      cellHeight={200}
      padding={1}
      style={styles.gridList}
    >
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionPosition="left"
          titlePosition="top"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          cols={tile.featured ? 2 : 1}
          rows={tile.featured ? 2 : 1}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default PhotoGrid;