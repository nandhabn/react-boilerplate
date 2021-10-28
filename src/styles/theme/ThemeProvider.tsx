import React from 'react';
import { useSelector } from 'react-redux';
import { useThemeSlice } from './slice';
import { selectTheme } from './slice/selectors';

export const ThemeProvider = (props: { children: React.ReactChild }) => {
  useThemeSlice();

  // FIXME -  add theme to the childrens
  const theme = useSelector(selectTheme);
  return <div>{React.Children.only(props.children)}</div>;
};
