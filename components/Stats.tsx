import React from 'react';
import { homepageStats } from "@/constants";

const Stats = () => {
  return (
    <div className="card__links mb-10 bg-primary-blue-100 rounded-3xl">
        {
          homepageStats.map(( stat,index ) => (
            <div className="stats-card  group">
              <div>
                <h2 className="text-lg font-bold">{stat.title}</h2>
              </div>
              <div>
                <p className="font-medium">
                  {stat.count}
                </p>
              </div>
            </div>
          ))

        }
    </div>
  );
};

export default Stats;