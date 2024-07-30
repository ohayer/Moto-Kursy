export interface Course {
  id: number;
  title: string;
  description: string;
  img_url: string;
  price: number;
  valid: boolean;
  position: number;
  createdAt: Date;
}

const Card = (props: Course) => {
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={props.img_url}
          alt="Shoes"
          className="h-64 w-full object-cover"
        />
      </figure>
      <div className="card-body h-52">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.description}</p>
        <div className="-mb-10 justify-start text-lg">
          <p className="flex items-center">
            {props.price}&nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffffff"
              height="14"
              width="14"
              version="1.1"
              id="Capa_1"
              viewBox="0 0 310.75 310.75"
              className="ml-1"
            >
              <path d="M183.815,265.726c-32.444,0-60.868-21.837-76.306-54.325h102.101v-45.023H95.643c-0.284-3.642-0.437-7.29-0.437-11.016  c0-3.691,0.152-7.384,0.437-10.977h113.969V99.353H107.51c15.438-32.485,43.861-54.315,76.306-54.315  c31.01,0,60.21,20.759,76.2,54.152l40.626-19.418C277.091,30.554,232.329,0,183.815,0c-36.47,0-70.51,16.665-95.851,46.966  C75.219,62.209,65.481,79.995,59.079,99.353H10.108v45.031h40.39c-0.217,3.617-0.329,7.311-0.329,10.977  c0,3.704,0.112,7.351,0.329,11.016h-40.39V211.4h48.971c6.402,19.356,16.14,37.122,28.886,52.351  c25.341,30.303,59.381,46.999,95.851,46.999c48.515,0,93.275-30.55,116.826-79.767l-40.626-19.454  C244.025,244.965,214.825,265.726,183.815,265.726z" />
            </svg>
          </p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Book</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
