/**
 * Convert string to avatar.
 *
 * @para String name
 * @return Object
 */
export function stringAvatar(name) {
  return { sx: {bgcolor: stringToColor(name),},
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

/**
 * Convert string to color.
 *
 * @para String string
 * @return String
 */
export function stringToColor(string) {
    let i;
    let hash = 0;
    let color = '#';
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = (
        string.charCodeAt(i) + ((hash << 5) - hash)
      );
    }
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }