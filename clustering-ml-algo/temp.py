# Title: Aibo Hierarchical Clustering

# Importing the needed libraries
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

# Importing the dataset
dataset = pd.read_csv('Customers.csv')
X = dataset.iloc[:, [5, 6]].values

# Using the dendrogram to find optimal number of clusters
import scipy.cluster.hierarchy as sch
dendrogram = sch.dendrogram(sch.linkage(X, method = 'ward'))
#ward is to minimize the variance of each cluster
plt.title('Dendrogram')
plt.xlabel('Coworkers')
plt.ylabel('Euclidean distances')
plt.show()

# Fitting Hierarchical Clustering to our Data
from sklearn.cluster import AgglomerativeClustering
hc = AgglomerativeClustering(n_clusters = 3, affinity = 'euclidean', linkage = 'ward')
y_hc = hc.fit_predict(X)

# Visualising the clusters and interpretation
plt.scatter(X[y_hc == 0, 0], X[y_hc == 0, 1], s = 100, c = 'cyan', label = '1st Cluster')
plt.scatter(X[y_hc == 1, 0], X[y_hc == 1, 1], s = 100, c = 'green', label = '2nd Cluster')
plt.scatter(X[y_hc == 2, 0], X[y_hc == 2, 1], s = 100, c = 'red', label = '3rd Cluster')
#plt.scatter(X[y_hc == 3, 0], X[y_hc == 3, 1], s = 100, c = 'blue', label = '4th Cluster')

plt.title('Aibo Matchings')
plt.xlabel('career goals')
plt.ylabel('past times')
plt.legend()
plt.show()
