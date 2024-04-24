import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>

    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client, index) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[292px] min-w-[120px] mb-${index !== clients.length - 1 ? '4' : '0'}`}>

          <img src={client.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain hover:scale-110 transition-transform duration-300" />

        </div>
      ))}
    </div>

  </section>
)

export default Clients;