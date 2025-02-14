function RegionPart({ image, name, onSelect }: any) {
  return (
    <figure className="item" onClick={() => onSelect(name)}>
      <img src={image} alt={name} />
      <figcaption className="region_name subtitle_color">{name}</figcaption>
    </figure>
  );
}
export default RegionPart;
