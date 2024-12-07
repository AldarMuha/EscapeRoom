import { useAppSelector } from '../../hooks';
import { getIsQuestsLoading, getQuests } from '../../store/site-data/selectors';
import QuestCard from '../quest-card/quest-card';
import Spinner from '../spinner/spinner';

function QuestCardList(): JSX.Element {
  const isQuestsLoading = useAppSelector(getIsQuestsLoading);
  const quests = useAppSelector(getQuests);
  if (isQuestsLoading) {
    return <Spinner />;
  }
  return (
    <div className="cards-grid">
      {
        quests.map((quest) => (
          <QuestCard key={quest.id} {...quest} />
        ))
      }
    </div>
  );
}

export default QuestCardList;
