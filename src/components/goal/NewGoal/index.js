import { useBreakpoint } from "@/hooks/index";
import styles from "@/styles/goal/NewGoalForm.module.scss";

import NewGoalForm from "./NewGoalForm";
import NewGoalHeader from "./NewGoalHeader";

export default function NewGoal({ toggleModal, isToggleModal }) {
  const matchQuery = useBreakpoint();

  return (
    <section
      className={styles.newGoal}
      onClick={(event) => event.stopPropagation()}
    >
      <div className={styles.newGoalInner}>
        <NewGoalHeader matchQuery={matchQuery} />
        <NewGoalForm
          toggleModal={toggleModal}
          matchQuery={matchQuery}
          isToggleModal={isToggleModal}
        />
      </div>
    </section>
  );
}
