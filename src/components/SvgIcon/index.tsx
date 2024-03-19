import styles from './index.module.less';

interface SvgIconProps {
  name: string; // svg名字
  className?: string; // 自定义类名
  color?: string; // 填充颜色
  [key: string]: any;
}

const SvgIcon = (props: SvgIconProps) => {
  const {name, color, className } = props;
  return (
    <svg {...props} className={`${styles['svg-class']} ${className}`} aria-hidden="true">
      <use xlinkHref={'#icon-' + name} fill={color} />
    </svg>
  );
};

export default SvgIcon;