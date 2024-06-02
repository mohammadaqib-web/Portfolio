import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,live,github }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      {live||github?
      <div className="d-flex justify-content-between ms-3 me-4">
        {live&&<h5 style={{cursor:"pointer"}}><a href={live} style={{textDecoration:"none",color:"white"}} target="_blank">Live Project</a></h5>}
        {github&&<h5 style={{cursor:"pointer"}}><a href={github} style={{textDecoration:"none",color:"white"}} target="_blank"><i className="fa-brands fa-github text-light"></i></a></h5>}
      </div>
      :''}
    </Col>
  )
}
