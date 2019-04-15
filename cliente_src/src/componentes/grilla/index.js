import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const styles = ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  gridList: {
    width: 500,
    height: 450,
    transform: 'translateZ(0)'
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  },
  icon: {
    color: '#ffc107'
  }
});

function AdvancedGridList(props) {
  const { classes, tileData } = props;
  const favorito = true;
  return (
    <div className={classes.root}>
      <GridList spacing={2} style={{width: '100%'}}>
        {tileData.map(tile => (
          <GridListTile cols={favorito ? 2 : 1} key='' rows={favorito ? 2 : 1}>
            <img alt={tile.content} src='' />
            <GridListTileBar
              actionIcon={
                <IconButton className={classes.icon}>
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition='left'
              className={classes.titleBar}
              title={tile.title}
              titlePosition='top'
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

AdvancedGridList.propTypes = {
  classes: PropTypes.object.isRequired,
  tileData: PropTypes.array.isRequired
};

export default withStyles(styles)(AdvancedGridList);
