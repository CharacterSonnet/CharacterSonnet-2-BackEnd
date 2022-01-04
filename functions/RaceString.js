//This function turns the name of a race into the necessary querystring for that race's data and options
const raceString = (raceName) => {
    return `
    query{
        race(filter:{index:"${raceName}"}){
          name
          speed
          age
          size
          language_desc
          languages{
            name
          }
          language_options{
            choose
              from{
                name
            }
          }
          ability_bonuses{
            ability_score{
              name
            }
            bonus
          }
          ability_bonus_options{
            choose
            from{
              ability_score{
                name
              }
              bonus
            }
          }
          starting_proficiencies{
            name
          }
          starting_proficiency_options{
            choose
            from{
              name
            }
          }
          subraces{
            name
          }
          traits{
            name
            desc
            proficiencies{
              name
              type
              races{
                name
              }
            }
          }
        }
      }
    `;
};

module.exports = raceString;