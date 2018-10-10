import React from 'react';
import { 
  Slide,
  Zoom
} from '@material-ui/core';

const SlideUpTransition = (props) => (
  <Slide direction="up" {...props} />
)

const SlideDownTransition = (props) => (
  <Slide direction="down" {...props} />
)

const ZoomTransition = (props) => (
  <Zoom {...props} />
)

export default {
  slideUp: SlideUpTransition,
  slideDown: SlideDownTransition,
  zoom: ZoomTransition
}

