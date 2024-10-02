# machine-learning-test
> [Google机器学习](https://developers.google.com/machine-learning/crash-course/)代码实践

## 启动
* 创建虚拟环境: `python3 -m venv .`
* 激活虚拟环境: `source bin/activate`
* 安装依赖包: `pip3 install -r requirements.txt`
* 运行代码: `python3 01pandas.py`
* 退出虚拟环境: `deativate`
* 更新requirements.txt: `pip3 frozen > requirements.txt`


## 知识图谱
* 数据清洗／优化
    * 泛化／数据具有代表性
    * 遗漏、重复、错误值
    * 原始数据映射为特征（比如字符串-->浮点型，包含编码、独热编码、分桶等）
    * 处理极端离群值
    * 缩放等（linear_scale, clip, log_normalize, binary_threshold）
    * 特征组合        
    * 嵌入: 主成分分析(PCA)等
* 流程优化
    * 数据集拆分：训练集、验证集、测试集
* 模型
    * 选型
        * tf.estimator.LinearRegressor
        * tf.estimator.LinearClassifier
        * tf.estimator.DNNRegressor
    * Optimizer
        * 梯度下降: tf.train.GradientDescentOptimizer
        * 正则化
            * L1: 将缺乏数据的特征和关联密切的特征的权重置为0
                tf.train.FtrlOptimizer(learning_rate, regularization_strength)
            * L2: 平衡模型的简单性（使权重符合正态分布）和损失值（防止过拟合）
        * tf.train.AdagradOptimizer
        * tf.train.AdamOptimizer
    * 调参数（learning_rate, steps, batch_size, hidden_units), TensorBoard
    * 评估／验证／测试
* 部署应用
    * 静态模型（导出模型、导入模型）
    * 动态模型
    * 输入值分布监控

### 图像识别(卷积神经网络)
* 卷积层(convolution) 、 ReLu 、 池化层(max-pooling) 、 Flatten 、 全连接层 (dense)


## 其他资料
* [嵌入:根据评论推测用户是否喜欢](https://colab.research.google.com/notebooks/mlcc/intro_to_sparse_data_and_embeddings.ipynb?utm_source=mlcc&utm_campaign=colab-external&utm_medium=referral&utm_content=embeddings-colab&hl=zh-cn#scrollTo=UlPZ-Q9bLS8m)
* [图片识别:猫和狗](https://colab.research.google.com/github/google/eng-edu/blob/master/ml/pc/exercises/image_classification_part1.ipynb?utm_source=practicum-IC&utm_campaign=colab-external&utm_medium=referral&hl=zh-cn&utm_content=imageexercise1-colab#scrollTo=ClebU9NJg99G)
* [practicalAI](https://github.com/GokuMohandas/practicalAI/)
* [Kaggle](https://www.kaggle.com/)
