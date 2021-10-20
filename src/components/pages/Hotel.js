import {useParams} from "react-router-dom";

export function Hotel() {
    const params = useParams();
      return <h1>Here is a hotel page {params.name}</h1>;
  }
  