import netflixLogo from "../assets/Netflix_icon.svg.png";
import primeLogo from "../assets/Prime_icon.png";
import huluLogo from "../assets/hulu-icon.jpg";
import disneyLogo from "../assets/Disney_Plus_Icon.png";
import hboLogo from "../assets/HBO_Max_Icon.png"
import crunchyrollLogo from "../assets/Crunchyroll_icon.png"

const streamingOptions = [
  { id: "8", label: "Netflix", logo: netflixLogo },
  { id: "9", label: "Prime Video", logo: primeLogo },
  { id: "15", label: "Hulu", logo: huluLogo },
  { id: "337", label: "Disney+", logo: disneyLogo },
  {id: "1899", label: "HBO Max", logo: hboLogo},
  {id: "283", label: "Crunchyroll", logo: crunchyrollLogo}
];

function StreamingFilter({ value, onChange }) {
  const toggleService = (serviceId) => {
    if (value.includes(serviceId)) {
      onChange(value.filter((s) => s !== serviceId));
    } else {
      onChange([...value, serviceId]);
    }
  };

  return (
    <div>
      <h5>Streaming Services</h5>
      <div className="streaming-options">
        {streamingOptions.map((service) => (
          <label key={service.id} className="streaming-option">
            <input
              type="checkbox"
              checked={value.includes(service.id)}
              onChange={() => toggleService(service.id)}
            />
            <img
              src={service.logo}
              alt={service.label}
              width="50"
            />
            <div>{service.label}</div>
          </label>
        ))}
      </div>
    </div>
  );
}

export default StreamingFilter;
