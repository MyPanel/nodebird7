module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', 
        {
            userId: {
                type: DataTypes.STRING(40),
                allowNull: true,
                unique: true,
            },
            name: {
                type: DataTypes.STRING(15),
                allowNull: true,
            },
            password: {
                type: DataTypes.STRING(100),
                allowNull: true,
            },
            provider: {
                type: DataTypes.STRING(10),
                allowNull: false,
                defaultValue: 'local',
            }
            }, {
                timestamps: true,
                paranoid: true,
            }
    );
    return User;
            
};














(sequelize, DataTypes) => (
    sequelize.define('user', {
      userId: {
        type: DataTypes.STRING(40),
        allowNull: true,
        unique: true,
      },
      name: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      provider: {
        type: DataTypes.STRING(10),
        allowNull: false,
        defaultValue: 'local',
      }
    }, {
      timestamps: true,
      paranoid: true,
    })
  );