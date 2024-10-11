import styles from './RichTextContent.module.scss';

const RichTextContent = ({ htmlContent }: { htmlContent: string }) => {
  return (
    <div
      className={styles.richTextContent}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default RichTextContent;
