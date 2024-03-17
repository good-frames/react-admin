import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';

export default function createSvgIcon(command: string) {
  return createSvgIconsPlugin({
    iconDirs: [path.resolve(process.cwd(), 'src/assets/icons/svg')],
    symbolId: 'icon-[dir]-[name]',
    svgoOptions: command === 'build'
  });
}
