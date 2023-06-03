import ContentLoader from "react-content-loader";

export function Skeleton() {
  return (
    <ContentLoader
      speed={2}
      width={400 * 2}
      height={160 * 2}
      viewBox="0 0 400 160"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="163" y="102" rx="0" ry="0" width="0" height="3" />
      <rect x="65" y="19" rx="0" ry="0" width="82" height="81" />
      <rect x="66" y="104" rx="0" ry="0" width="63" height="8" />
      <circle cx="140" cy="108" r="7" />
      <rect x="65" y="118" rx="0" ry="0" width="82" height="5" />
      <rect x="65" y="127" rx="0" ry="0" width="82" height="5" />
    </ContentLoader>
  );
}
