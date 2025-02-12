function RegionPart({ image, name }: any) {
  return (
    <figure className="item">
      <img src={image} alt={name} />
      <figcaption className="region_name subtitle_color">{name}</figcaption>
    </figure>
  );
}
export default RegionPart;
