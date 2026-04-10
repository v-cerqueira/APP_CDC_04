import { StyleSheet } from 'react-native';

const footerStyles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#efefef',
    borderTopWidth: 1,
    borderTopColor: '#dbdbdb',
  },
  caption: {
    textAlign: 'center',
    color: '#656565',
    fontSize: 15,
    paddingTop: 10,
    paddingBottom: 8,
  },
  captionStrong: {
    fontWeight: '800',
  },
  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e2e2e2',
  },
  actionItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  actionDivider: {
    borderRightWidth: 1,
    borderRightColor: '#d7d7d7',
  },
  icon: {
    fontSize: 28,
    fontWeight: '700',
  },
});

export default footerStyles;
