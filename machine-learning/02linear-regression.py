#https://colab.research.google.com/notebooks/mlcc/first_steps_with_tensor_flow.ipynb?utm_source=mlcc&utm_campaign=colab-external&utm_medium=referral&utm_content=firststeps-colab&hl=zh-cn#scrollTo=HzzlSs3PtTmt
from __future__ import print_function

import math
from IPython import display
from matplotlib import cm, gridspec, pyplot as plt
import numpy as np
import pandas as pd
import tensorflow as tf
from tensorflow.python.data import Dataset
from sklearn import metrics

tf.compat.v1.logging.set_verbosity(tf.compat.v1.logging.ERROR)
pd.options.display.max_rows = 10
pd.options.display.float_format = '{:.1f}'.format


california_housing_dataframe = pd.read_csv('https://download.mlcc.google.cn/mledu-datasets/california_housing_train.csv', sep=',')

california_housing_dataframe.reindex( # 将数据排序打乱，否则可能会影响随机梯度下降法的效果(原csv的数据是按照logitude进行排序的)
    np.random.permutation(california_housing_dataframe.index)
)
# print(california_housing_dataframe.index)
# print(np.random.permutation(california_housing_dataframe.index))

california_housing_dataframe['median_house_value'] /= 1000.0 # 缩小house_value的范围，加快学习速率

# print(california_housing_dataframe.describe())

my_optimizer = tf.contrib.estimator.clip_gradients_by_norm(tf.train.GradientDescentOptimizer(learning_rate = 0.0000001), 5.0)

linear_regressor = tf.estimator.LinearRegressor(
    feature_columns = [tf.feature_column.numeric_column('total_rooms')],
    optimizer = my_optimizer
)

def my_input_fn(features, targets, batch_size = 1, shuffle = True, num_epochs = None) :
    """
    Trains a linear regression model of one feature.
  
    Args:
      features: pandas DataFrame of features
      targets: pandas DataFrame of targets
      batch_size: Size of batches to be passed to the model
      shuffle: True or False. Whether to shuffle the data.
      num_epochs: Number of epochs for which data should be repeated. None = repeat indefinitely
    Returns:
      Tuple of (features, labels) for next data batch
    """

    # Convert pandas data into a dict of np arrays.
    features = {key:np.array(value) for key,value in dict(features).items()}                                           
 
    # Construct a dataset, and configure batching/repeating.
    ds = Dataset.from_tensor_slices((features,targets)) # warning: 2GB limit
    ds = ds.batch(batch_size).repeat(num_epochs)
    
    # Shuffle the data, if specified.
    if shuffle:
      ds = ds.shuffle(buffer_size=10000)
    
    # Return the next batch of data.
    features, labels = ds.make_one_shot_iterator().get_next()
    return features, labels


my_feature = california_housing_dataframe[['total_rooms']]
targets = california_housing_dataframe['median_house_value']

# print(california_housing_dataframe[['total_rooms']])
# print(california_housing_dataframe['total_rooms'])


# --------- 训练模型 ---------
_ = linear_regressor.train(
    input_fn = lambda: my_input_fn(my_feature, targets),
    steps = 100
)


# --------- 评估模型 ---------
prediction_input_fn = lambda: my_input_fn(my_feature, targets, 1, False, 1)
preditions = linear_regressor.predict(input_fn = prediction_input_fn)
preditions = np.array([item['predictions'][0] for item in preditions])

min_house_value = targets.min()
max_house_value = targets.max()
mean_squared_error = metrics.mean_squared_error(preditions, targets)
root_mean_squared_error = math.sqrt(mean_squared_error)

print("Min. Median House Value: %0.3f" % min_house_value)
print("Max. Median House Value: %0.3f" % max_house_value)
print('Mean Squared Error (on traing data): %0.3f' % mean_squared_error)
print('Root Mean Squared Error (on traing data): %0.3f' % root_mean_squared_error)


# --------- 绘图 ---------
sample = california_housing_dataframe.sample(n=300)


# Get the min and max total_rooms values.
x_0 = sample["total_rooms"].min()
x_1 = sample["total_rooms"].max()

# Retrieve the final weight and bias generated during training.
weight = linear_regressor.get_variable_value('linear/linear_model/total_rooms/weights')[0]
bias = linear_regressor.get_variable_value('linear/linear_model/bias_weights')

# Get the predicted median_house_values for the min and max total_rooms values.
y_0 = weight * x_0 + bias 
y_1 = weight * x_1 + bias

# Plot our regression line from (x_0, y_0) to (x_1, y_1).
plt.plot([x_0, x_1], [y_0, y_1], c='r')

# Label the graph axes.
plt.ylabel("median_house_value")
plt.xlabel("total_rooms")

# Plot a scatter plot from our data sample.
plt.scatter(sample["total_rooms"], sample["median_house_value"])

# Display graph.
plt.show()