import { FC, PropsWithChildren } from "react";
import { Helmet } from "react-helmet";
import { siteName, titleMerge } from "./meta-helpers";
import logoImage from "/logo_olymp.png"; // Assuming you have this path correct

interface ISeo {
  title: string | undefined;
  description?: string;
  image?: string;
}

interface MetaProps extends PropsWithChildren<ISeo> {}

const Meta: FC<MetaProps> = ({ title, description, image, children }) => {
  const currentUrl = window.location.href;

  return (
    <>
      <Helmet>
        <title itemProp="headline">{titleMerge(title)}</title>
        <meta property="locale" content="ru" />
        <meta property="image" content={image || logoImage} />
        <meta property="site_name" content={siteName} />
        <meta property="url" content={currentUrl} />
        <link rel="canonical" href={currentUrl} />
        {description ? (
          <>
            <meta
              itemProp="description"
              name="description"
              content={description}
            />
            <meta property="og:title" content={titleMerge(title)} />
            <meta property="og:description" content={description} />
          </>
        ) : (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Helmet>
      {children}
    </>
  );
};

export default Meta;
