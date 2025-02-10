const appStyle = {
  wrapper: {
    position: 'relative' as const,
    top: '0',
    height: '100vh',
    display: 'flex',
    backgroundColor: '#f5f5f5',
  },
  mainPanel: {
    flexGrow: 1,
    overflow: 'auto',
    position: 'relative' as const,
    float: 'right' as const,
    maxHeight: '100%',
    width: 'calc(100% - 208px)',
    overflowScrolling: 'touch' as const,
  },
  content: {
    marginTop: '70px',
    padding: '30px 15px',
    minHeight: 'calc(100vh - 123px)',
    backgroundColor: "#F9FAFB",
  },
};

export default appStyle;