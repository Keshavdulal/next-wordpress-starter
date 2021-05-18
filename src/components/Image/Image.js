import ClassName from 'models/classname';

import styles from './Image.module.scss';

const Image = ({
  children,
  className,
  width = '100%',
  height = 'auto',
  src,
  alt,
  srcSet,
  sizes,
  dangerouslySetInnerHTML,
}) => {
  const imageClassName = new ClassName(styles.image);
  // const imgAnimStyle = useSpring({
  //   to: { opacity: 1, marginTop: 0 },
  //   from: { opacity: 0, marginTop: -10 },
  // })

  imageClassName.addIf(className, className);

  return (
    <figure className={imageClassName.toString()}>
      <div className={styles.featuredImageImg}>
        <img
          // style={imgAnimStyle}
          width={width}
          height={height}
          src={src}
          alt={alt || ''}
          srcSet={srcSet}
          sizes={sizes}
        />
      </div>
      {children && <figcaption>{children}</figcaption>}
      {dangerouslySetInnerHTML && (
        <figcaption
          dangerouslySetInnerHTML={{
            __html: dangerouslySetInnerHTML,
          }}
        />
      )}
    </figure>
  );
};

export default Image;
