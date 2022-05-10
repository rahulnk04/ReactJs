import { Card as MUICard } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./card.styles.css";

const Card = ({ monster }) => {
  const { id, name, email } = monster;

  return (
    <MUICard className="card-container" elevation={1} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`monster ${name}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {email}
        </Typography>
      </CardContent>
    </MUICard>
  );
};

export default Card;
